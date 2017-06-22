pipeline {

    agent{
       docker {
           image 'node:6.9.5'
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