# 🚀 DevSecOps Pipeline Demo (Jenkins + Snyk + Sonar Scanner)

---

## 📌 Project Overview

This project demonstrates a simple **DevSecOps CI/CD pipeline** using:

```text
GitHub → Jenkins → npm install → npm test → Snyk → Sonar Scanner
```

The goal is to show how code moves through a pipeline where it is:

* built
* tested
* scanned for vulnerabilities

---

## 🛠️ Tools Used

* **GitHub** – Source code repository
* **Jenkins** – CI/CD pipeline automation
* **Node.js & npm** – Application runtime
* **Snyk** – Security vulnerability scanning
* **Sonar Scanner** – Code quality analysis tool

---

## 📂 Project Structure

```text
jenkins-demo/
├── index.js        # Application code
├── test.js         # Simple test file
├── package.json    # Node.js configuration
├── Jenkinsfile     # Jenkins pipeline
└── README.md       # Project documentation
```

---

## ⚙️ Pipeline Stages

The Jenkins pipeline includes the following stages:

### 1️⃣ List Files

Displays workspace and verifies code checkout.

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Tests

```bash
npm test
```

### 4️⃣ Snyk Scan

* Authenticates using Snyk token
* Scans project for vulnerabilities

```bash
snyk test
```

### 5️⃣ Sonar Scanner Check

* Verifies Sonar Scanner installation

```bash
sonar-scanner -v
```

---

## 🔐 Credentials Setup

In Jenkins:

* Add **Snyk Token**

  * Type: `Secret Text`
  * ID: `snyk-token`

---

## ▶️ How to Run

1. Push code to GitHub
2. Jenkins pulls the repository
3. Click **Build Now** in Jenkins
4. Pipeline executes all stages

---

## ✅ Expected Output

* ✔ Dependencies installed successfully
* ✔ Tests passed
* ✔ Snyk scan executed
* ✔ Sonar Scanner verified
* ✔ Jenkins build shows **SUCCESS**

---

## 📸 Screenshots (Add Here)

Include screenshots of:

* Jenkins successful build
* Pipeline stages
* Snyk scan output

---

## 🚧 Future Improvements

* Integrate **SonarQube Server** for full code analysis
* Add **Docker build and push to DockerHub**
* Deploy application to cloud (Azure)

---
## ✅ Actual Pipeline Output

The Jenkins pipeline executed successfully with the following results:

* ✔ Dependencies installed successfully (`npm install`)
* ✔ Test execution passed (`Test passed`)
* ✔ Snyk vulnerability scan completed
* ✔ No vulnerabilities found in the project
* ✔ Sonar Scanner verified successfully
* ✔ Jenkins build status: **SUCCESS**

### 🔍 Snyk Scan Result

```text
✔ Tested project for known issues, no vulnerable paths found.
```

This confirms that the application dependencies are secure and free from known vulnerabilities.

## 🎯 Conclusion

This project demonstrates a basic DevSecOps pipeline that integrates:

* CI/CD automation
* testing
* security scanning

It serves as a foundation for building more advanced pipelines.

---
## 🌐 Live Demo

Jenkins URL:( http://20.63.83.172:8080/job/git-pipeline/3 )
## 👨‍💻 Author

Sejal Sakhala
DevSecOps Bootcamp Project
