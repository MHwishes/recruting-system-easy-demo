pipeline {
	agent { docker 'node:6.9.5' , docker 'jetty' ,  mysql '5.7'}
	stages {
		stage('build') {
			steps {
				sh 'npm --version'
				sh 'echo "Hello Word!"'
			}

		}
		stage('test')
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