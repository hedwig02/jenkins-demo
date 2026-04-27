pipeline {
    agent any

   tools {
    nodejs 'nodejs'
    sonarScanner 'sonar-scanner'
}

    environment {
        ACR_NAME = "sejalregistry2026"
        RESOURCE_GROUP = "sejal-rg"
        AKS_CLUSTER = "sejal-aks-cluster"

        AZURE_CLIENT_ID = credentials('azure-client-id')
        AZURE_CLIENT_SECRET = credentials('azure-client-secret')
        AZURE_TENANT_ID = credentials('azure-tenant-id')
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
                sh 'npm test || true'
            }
        }

      stage('SonarQube Scan') {
    steps {
        script {
            def scannerHome = tool 'sonar-scanner'
            withSonarQubeEnv('SonarQube') {
                sh "${scannerHome}/bin/sonar-scanner || true"
            }
        }
    }
}

        stage('Docker Build') {
            steps {
                sh 'docker build -t $ACR_NAME.azurecr.io/jenkins-demo-app:latest .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image $ACR_NAME.azurecr.io/jenkins-demo-app:latest || true'
            }
        }

        stage('Azure Login') {
            steps {
                sh '''
                az login --service-principal \
                  -u $AZURE_CLIENT_ID \
                  -p $AZURE_CLIENT_SECRET \
                  --tenant $AZURE_TENANT_ID
                '''
            }
        }

        stage('Push to ACR') {
            steps {
                sh '''
                az acr login --name $ACR_NAME
                docker push $ACR_NAME.azurecr.io/jenkins-demo-app:latest
                '''
            }
        }

        stage('Deploy to AKS') {
            steps {
                sh '''
                kubectl create deployment jenkins-demo-app --image=$ACR_NAME.azurecr.io/jenkins-demo-app:latest --dry-run=client -o yaml | kubectl apply -f -
                kubectl expose deployment jenkins-demo-app --type=LoadBalancer --port=80 --target-port=3000 --dry-run=client -o yaml | kubectl apply -f -
                kubectl get pods
                kubectl get svc
                '''
            }
        }
    }
}
