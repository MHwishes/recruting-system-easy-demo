pipeline {

    agent{
       docker {
           image 'node:6.9.5 , mysql:5.7, mongodb:3.2 ,jetty:9.3 '
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