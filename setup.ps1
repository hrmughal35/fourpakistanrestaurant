# FOUR Restaurant - dependency setup
# Run in PowerShell: .\setup.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Checking disk space..." -ForegroundColor Cyan
Get-PSDrive -PSProvider FileSystem | Where-Object { $_.Name -match '^[C-Z]$' } | ForEach-Object {
    $freeGb = [math]::Round($_.Free / 1GB, 2)
    Write-Host "  Drive $($_.Name): $freeGb GB free"
    if ($freeGb -lt 2) {
        Write-Warning "Drive $($_.Name) has less than 2 GB free. npm install needs ~500MB–1GB."
    }
}

Write-Host "`nClearing npm cache..." -ForegroundColor Cyan
npm cache clean --force

Write-Host "`nInstalling dependencies (this may take a few minutes)..." -ForegroundColor Cyan
npm install

if (-not (Test-Path "node_modules\next\package.json")) {
    Write-Host "`nInstall failed. Free disk space, then run: npm install" -ForegroundColor Red
    exit 1
}

Write-Host "`nSuccess! Starting dev server..." -ForegroundColor Green
npm run dev
