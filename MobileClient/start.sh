ionic start DatingApp blank --type=angular --capacitor


# Manage accountservice state (and API calls)
ionic g service _services/account

# Additional Pages
ionic g page pages/intro
ionic g page pages/login


# secure inside area
ionic g guard/auth --implements CanLoad

# Show intro automatically once
ionic g guard guards/intro --implements CanLoad

# Automatically log in users
ionic g guard guards/autoLogin -- implemnts CanLoad


# Install Capacitor storage for v3
npm install @capacitor/storage
