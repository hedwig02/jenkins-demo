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

        stage('Docker Build') {
            steps {
                sh 'docker build -t dockermaniac02/jenkins-demo-app:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push dockermaniac02/jenkins-demo-app:latest'
            }
        }

        stage('List Docker Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}
