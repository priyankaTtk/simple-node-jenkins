pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    sh 'docker build -t myapp:test .'
                    sh 'docker run -d -p 3000:3000 myapp:test'
                }
            }
        }
    }
}
