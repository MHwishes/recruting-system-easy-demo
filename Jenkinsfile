node {
	stages {
		stage('build') {
			steps {
			    sh 'cd bff && npm i && npm run ut'
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

	}
}