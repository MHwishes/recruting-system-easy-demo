pipeline {
	agent none
	stages {
		stage('build') {
		    agent {docker 'node:6.9.5'}
			steps {
				sh 'npm --version'
				sh 'echo "Hello Word!"'
			}

		}
		stage('test')
		  agent {docker 'jetty' },{mysql '5.7'}
		  steps{
		    sh './db-initial.sh'
            sh './gradlew test'
		   }


		stage('deploy')
		  steps{
		   sh 'mmmmmmmmm'

		  }
	}
}