function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    // this.url = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/users';
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001222642/users';
    var self = this;

    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function (response) {
            return response.json()
        })
    }

    function findAllUsers() {
        return fetch(self.url)
            .then(response => response.json())
    }
    function findUserById(userId) {
        return fetch(`${self.url}/${userid}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    function updateUser(userid, user) {
        return fetch(`${self.url}/${userid}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    }
}
