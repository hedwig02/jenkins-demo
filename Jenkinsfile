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
