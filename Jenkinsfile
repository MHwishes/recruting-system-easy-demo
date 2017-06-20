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
		  agent {docker 'jetty' }
		        {mysql '5.7'}
		  steps{
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