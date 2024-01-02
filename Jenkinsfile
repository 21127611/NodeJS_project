pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git credentialsId:'Git', url: 'https://github.com/21127611/NodeJS_project'
            }
        }
        stage('Build Docker Nodejs Image') {
            steps {
                sh "docker build -t 21127611/node_docker"
            }
        }
        stage('Push to Hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhubpwd', variable: 'dockerhubpwd')]) 
                    sh 'docker login -u hoanganhcun123 -p ${dockerhubpwd}'
                }
                sh 'docker push hoanganhcun123/devops_project'
            }
        }
        stage('Deploy Nodejs') {
            steps {
                sh 'docker start node_server || docker run -d --name node_server -p 4000:8081 21127611/node_docker'
            }
        }
        stage('Test') {
            steps{
                sh 'docker exec --tty node-server curl https://localhost:8081'
            }
        }
    }
}