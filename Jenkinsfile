pipeline {

    agent{
       docker {
           image 'node:6.9.5'
           image 'mysql:5.7'
           image 'mongodb:3.2'
           image 'jetty:9.3'
           args '-u root'
        }
    }
	stages {

		stage('build') {
			steps {
			    sh 'cd bff && npm i && npm run ut'
			}

		}


	}
}