pipeline {
    agent none
	stages {
	     agent {
                docker {
                    image 'node'
                    args '-u root'
                }
            }
		stage('build') {
			steps {
			    sh 'cd bff && npm i && npm run ut'
			}

		}


	}
}