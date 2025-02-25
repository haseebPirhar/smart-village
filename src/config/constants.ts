export const AUTH_CONFIG = {
  JWT_EXPIRES_IN: "24h",
  PASSWORD_MIN_LENGTH: 6,
  OTP_EXPIRES_IN: 3600000, // 1 hour in milliseconds
  OTP_LENGTH: 6,
};

export const FILE_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ["image/jpeg", "image/png"],
  UPLOAD_PATH: "./uploads/profiles",
};

export const EMAIL_CONFIG = {
  TEMPLATES: {
    RESET_PASSWORD: "reset-password",
    WELCOME: "welcome",
  },
};
