pipeline {
	agent none
	stages {
		stage('build') {
		    agent {docker 'node:6.9.5'}
			steps {
				sh 'npm i'
				sh 'npm run ut'
			}

		}
		stage('test'){
		  steps{
            sh 'docker ps'
            sh 'docker-compose up -d'
            sh 'docker ps'
		    sh './db-initial.sh'
            sh './gradlew test'
		   }
		  }


		stage('deploy')
		  steps{
		   sh 'mmmmmmmmm'

		  }
	}
}