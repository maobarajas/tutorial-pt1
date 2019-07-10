module.exports = {
  apps: [{
    name: 'tutorial-aws-ec2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-91-210-98.compute-1.amazonaws.com',
      key: '~/.ssh/testkp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nach-arch/tutorial-pt1.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}