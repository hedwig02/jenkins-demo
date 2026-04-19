pipeline {
    agent any

    stages {
        stage('Check Tools') {
            steps {
                sh 'echo "User:"'
                sh 'whoami'

                sh 'echo "Current Directory:"'
                sh 'pwd'

                sh 'echo "List workspace:"'
                sh 'ls -la'

                sh 'echo "Check /opt:"'
                sh 'ls /opt || true'

                sh 'echo "Check snyk:"'
                sh 'which snyk || true'

                sh 'echo "Check git:"'
                sh 'which git || true'

                sh 'echo "Check java:"'
                sh 'java -version || true'
            }
        }
    }
}
