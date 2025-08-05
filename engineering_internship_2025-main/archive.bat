@echo off

set "UserName=%~1"
:loop
if "%UserName%"=="" (
    set /p "UserName=Enter username for submission: "
    goto loop
)

if not exist "%cd%\archive" (
    mkdir "%cd%\archive"
)

set "Date=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%"

set "ZipFile=%cd%\archive\engineering_internship_2025_%UserName%_%Date%.zip"

PowerShell -Command ^
    $exclude = @('.*', 'node_modules', 'archive*'); ^
    $sources = Get-ChildItem -Path '%cd%' -Exclude $exclude; ^
    Compress-Archive -Path $sources -DestinationPath '%ZipFile%'

echo ZIP archive created: %ZipFile%
