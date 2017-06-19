pipeline {
	agent { docker 'node:6.9.5' }
	stages {
		stage('build') {
			steps {
				sh 'npm --version'
				sh 'echo "Hello Word!"'
			}
		}
	}
}