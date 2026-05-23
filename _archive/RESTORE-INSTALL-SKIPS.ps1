$ErrorActionPreference = "Stop"

$Root = "C:\DEV\TradeConnectAI_fixed"
$ArchiveDir = "C:\DEV\TradeConnectAI_fixed\_archive\install-skips-demo-2026-05-23-021139"
$TargetDir = Join-Path $Root "app\install-skips-demo"

if (!(Test-Path $ArchiveDir)) {
  throw "Archive folder not found: $ArchiveDir"
}

if (Test-Path $TargetDir) {
  Remove-Item $TargetDir -Recurse -Force
}

Copy-Item -Path $ArchiveDir -Destination $TargetDir -Recurse -Force

Set-Location $Root

git add app/install-skips-demo
git commit -m "Restore Install Skips demo from archive"
git push

Write-Host "✅ Install Skips demo restored." -ForegroundColor Green
