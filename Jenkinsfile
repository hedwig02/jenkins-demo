pipeline {
    agent any

    stages {
        stage('Check Tools') {
            steps {
                sh 'whoami'
                sh 'which git'
                sh 'which snyk'
                sh 'java -version'
                sh '/opt/sonar-scanner/bin/sonar-scanner -v'
                sh 'snyk --version'
            }
        }
    }
}
            }
        }
    }
}
