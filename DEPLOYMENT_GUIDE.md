# Deployment Guide: Uploading to Server via WinSCP

## Prerequisites
- WinSCP installed on your computer
- Server credentials (hostname, username, password/SSH key)
- Your project ready for deployment

## Steps to Upload Your Project

### 1. Prepare Your Project
- Make sure your project is built and ready for production if needed
- Remove any unnecessary files (node_modules, .git, etc.)

### 2. Connect to Your Server with WinSCP
1. Open WinSCP
2. Enter your server details:
   - Host name: Your server hostname
   - Username: Your username (likely "kalope")
   - Password: Your server password
   - Port: 22 (default for SFTP)
3. Click "Login" to connect

### 3. Navigate to Target Directory
1. In the right panel (server), navigate to `/home/w/kalope/PersonalWeb/`
2. In the left panel (local), navigate to your project folder

### 4. Upload Files
1. Select all files/folders from your local project
2. Drag them to the right panel or use the upload button
3. Wait for the transfer to complete

### 5. Set Permissions (if needed)
1. Select all uploaded files on the server
2. Right-click and select "Properties"
3. Set appropriate permissions:
   - Folders: 755 (drwxr-xr-x)
   - Files: 644 (rw-r--r--)
   - Executable files: 755 (rwxr-xr-x)

### 6. Verify Deployment
1. Check that all files were uploaded correctly
2. Access your website through your browser to ensure it works properly

## Troubleshooting
- If you encounter permission issues, contact your server administrator
- For connection problems, check your credentials and server firewall settings 