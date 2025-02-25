module.exports = {
  apps: [
    {
      name: "teilim",
      script: "./dist/index.js",
      interpreter: "node",
      interpreter_args: "-r ./register-aliases.js",
      env: {
        PORT: 3007,
      },
      autorestart: true,
      error_file: "./logs/pm2/error.log",
      out_file: "./logs/pm2/out.log",
      log_file: "./logs/pm2/combined.log",
      time: true,
    },
    {
      name: "teilim-cronjob",
      script: "./scripts/cronjob.sh",
      cron_restart: "*/10 * * * *",
      autorestart: false
    }
  ],
  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "yarn install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
