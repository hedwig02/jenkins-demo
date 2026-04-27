# DevSecOps CI/CD Pipeline on Azure (Jenkins + SonarQube + Trivy + AKS)

## 📌 Project Overview

This project demonstrates an end-to-end DevSecOps CI/CD pipeline using Jenkins and Azure services.

The pipeline automates:

* Code build
* Testing
* Security scanning
* Containerization
* Deployment to Kubernetes

---

## 🛠️ Tools Used

* GitHub – Source code repository
* Jenkins – CI/CD pipeline automation
* Node.js & npm – Application runtime
* SonarQube – Code quality & vulnerability scanning (SAST)
* Docker – Containerization
* Trivy – Container image security scanning
* Azure CLI – Cloud interaction
* Azure Container Registry (ACR) – Image storage
* Azure Kubernetes Service (AKS) – Deployment platform

---

## 🔄 Pipeline Flow

GitHub → Jenkins → npm install → npm test → SonarQube → Docker build → Trivy scan → Push to ACR → Deploy to AKS

---

## ⚙️ Pipeline Stages

1️⃣ Checkout Code

* Jenkins pulls code from GitHub

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Run Tests

```bash
npm test
```

4️⃣ SonarQube Scan

* Performs static code analysis

5️⃣ Docker Build

* Builds container image

6️⃣ Trivy Scan

* Scans Docker image for vulnerabilities

7️⃣ Azure Login

* Uses Service Principal

8️⃣ Push to ACR

```bash
docker push
```

9️⃣ Deploy to AKS

```bash
kubectl create deployment
kubectl expose deployment
```

---

## 🔐 Credentials Setup

In Jenkins:

* Azure Client ID
* Azure Client Secret
* Azure Tenant ID
* SonarQube Token

---

## 📂 Project Structure

```
jenkins-demo/
├── index.js
├── test.js
├── package.json
├── Dockerfile
├── Jenkinsfile
└── README.md
```

---

## ✅ Output

✔ Jenkins pipeline executed successfully
✔ Docker image built and pushed to ACR
✔ Application deployed on AKS
✔ Pods and services running
✔ Application accessible via external IP
✔ Security scanning performed using SonarQube and Trivy

---

## 📸 Screenshots

* Jenkins pipeline success
* SonarQube dashboard
* Trivy scan output
* ACR repository image
* AKS pods and services
* Application running in browser

---

## 🚧 Future Improvements

* Use Helm for deployment
* Add Ingress controller
* Implement autoscaling (HPA)
* Integrate monitoring (Azure Monitor / Prometheus)

---

## 🎯 Conclusion

This project demonstrates a complete DevSecOps pipeline integrating CI/CD, security scanning, containerization, and Kubernetes deployment on Azure.

---

## 👨‍💻 Author

Sejal Sakhala
DevSecOps Bootcamp Project
