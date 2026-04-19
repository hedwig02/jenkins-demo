pipeline {
    agent any

    environment {
        SCANNER_HOME = '/opt/sonar-scanner'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/hedwig02/jenkins-demo.git'
            }
        }

        stage('List Files') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Sonar Scanner Version') {
            steps {
                sh '$SCANNER_HOME/bin/sonar-scanner -v'
            }
        }

        stage('Snyk Version') {
            steps {
                sh 'snyk --version'
            }
        }
    }
}
