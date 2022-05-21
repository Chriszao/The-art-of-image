const { execute } = require('./utils');

execute(
	`sh build.sh && 
  echo Deploying to terraform... && 
  cd terraform && terraform apply && 
  terraform`
);
