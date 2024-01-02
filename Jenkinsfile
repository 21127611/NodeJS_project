pipeline {
    agent any
    stages {
        stage('Build Docker Nodejs Image') {
            steps {
                sh "docker build -t hoanganhcun123/nodejs_docker ."
            }
        }
        stage('Push to Hub') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                        sh 'docker push hoanganhcun123/nodejs_docker:latest'
                    }
                }
            }
        }
        stage('Deploy Nodejs') {
            steps {
                sh 'docker container run -p 4000:8081 hoanganhcun123/nodejs_docker'
            }
        }
    }
}