pipeline {
    agent any

    environment {
        SCANNER_HOME = '/opt/sonar-scanner'
        SNYK_TOKEN = credentials('snyk-token')
    }

    stages {
        stage('List Files') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Snyk Scan') {
            steps {
                sh 'snyk auth $SNYK_TOKEN'
                sh 'snyk test || true'
            }
        }

        stage('Sonar Scanner Check') {
            steps {
                sh '$SCANNER_HOME/bin/sonar-scanner -v'
            }
        }
    }
}
