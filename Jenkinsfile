pipeline {
    agent any

    environment {
        SCANNER_HOME = '/opt/sonar-scanner'
        SNYK_TOKEN = credentials('snyk-token')
        IMAGE_NAME = 'jenkins-demo-app'
        IMAGE_TAG = 'latest'
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

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('List Docker Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}
