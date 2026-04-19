pipeline {
    agent any

    stages {
        stage('Checkout Confirm') {
            steps {
                echo 'Checkout successful'
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('System Info') {
            steps {
                sh 'whoami'
                sh 'which git'
                sh 'java -version'
            }
        }
    }
}
