
(function () {
    var UserService = new AdminUserServiceClient();


    let users = [

    ]


    const rowTemplate = jQuery('.wbdv-template');
    const tbody =jQuery('.wbdv-tbody');

    // var selectedUser = null

    function renderUsers(users) {
        tbody.empty()
        for (var u in users) {
            const user = users[u];
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden');
            // rowClone.find('.wbdv-username').html(user.username).attr("id", user._id);
            // rowClone.find('.wbdv-password').html(user.password).attr("id", user._id);
            // rowClone.find('.wbdv-first-name').html(user.firstName).attr("id", user._id);
            // rowClone.find('.wbdv-last-name').html(user.lastName).attr("id", user._id);
            // rowClone.find('.wbdv-role').html(user.role).attr("id", user._id);
            rowClone.find('.wbdv-username').attr("id", user._id);
            rowClone.find('.wbdv-username').html(user.username);
            rowClone.find('.wbdv-password').attr("id", user._id);
            rowClone.find('.wbdv-password').html(user.password);
            rowClone.find('.wbdv-first-name').attr("id", user._id);
            rowClone.find('.wbdv-first-name').html(user.firstName);
            rowClone.find('.wbdv-last-name').attr("id", user._id);
            rowClone.find('.wbdv-last-name').html(user.lastName);
            rowClone.find('.wbdv-role').html(user.role);
            rowClone.find('.wbdv-role').attr("id", user._id);
            rowClone.find('.huixian-delete-btn').attr("id", user._id);
            rowClone.find('.huixian-select-btn').attr("id", user._id);

            tbody.append(rowClone);


        }
        // for(var i=0; i< users.length; i++) {
        //     var user = users[i]
        //     $tbody.prepend("<tbody>\n" +
        //         "        <tr>\n" +
        //         "            <td>${user.username}</td>\n" +
        //         "            <td>${user.password}</td>\n" +
        //         "            <td>${user.firstName}</td>\n" +
        //         "            <td>${user.lastName}</td>\n" +
        //         "            <td>${user.role}</td>\n" +
        //         "            <td>\n" +
        //         "        <span class=\"pull-right\">\n" +
        //         "          <button>Delete</button>\n" +
        //         "          <button> Select </button>\n" +
        //         "        </span>\n" +
        //         "            </td>\n" +
        //         "        </tr>\n" +
        //         "        </tbody>")
        // }


        $(".huixian-delete-btn").click(function (event) {
            var button = $(event.target)
            var index = button.attr("id")
            UserService.deleteUser(index)
                .then (function(status){
                    users.splice(index,1)
                    renderUsers(users)
                })
            console.log(index)
            users.splice(index, 1)
            renderUsers(users)
        })

        var selectedUser = null
        $(".huixian-select-btn").click(function (event) {
            const id = $(event.target).attr("id")
            console.log("userid",id)
            selectedUser = users.find(user => user._id === id)
            $usernamefl.val(selectedUser.username)
            $passwordfl.val(selectedUser.password)
            $firstnamefl.val(selectedUser.firstName)
            $lastnamefl.val(selectedUser.lastName)
            $rolefl.val(selectedUser.role)
        })




    }
    renderUsers(users);


    function createUser(user) {
        console.log(user);
        UserService.createUser(user)
            .then(function (user) {
                users.push(user)
                renderUsers(users)
            })
    }

    var $usernamefl = $(".username-fl");
    var $passwordfl = $(".password-fl")
    var $firstnamefl = $(".fisrtname-fl");
    var $lastnamefl = $(".lastname-fl");
    var $rolefl = $(".role-fl");

    var updateBtn = $(".huixian-update-btn")


    var createBtn = $(".huixian-create-btn");




    createBtn.click(function(){
        var newUser = {
            username: $usernamefl.val(),
            password: $passwordfl,
            firstName: $firstnamefl.val(),
            lastName: $lastnamefl.val(),
            role: $rolefl.val()

        }
        createUser(newUser)

    })

    updateBtn.click(function(selectedUser){
        // console.log("userid",id)
        console.log(selectedUser)
        const id = $(event.selectedUser).attr("id")
        console.log(id)
        selectedUser.username = $usernamefl.val()
        selectedUser.firstName = $firstnamefl.val()
        selectedUser.lastName = $lastnamefl.val()
        selectedUser.role = $rolefl.val()
        UserService.updateUser(selectedUser._id, selectedUser)
            .then(status => {
                var index = users.findIndex(user => user._id === selectedUser._id)
                users[index] = selectedUser
                renderUsers(users)
            })
    })


    function init() {
        UserService.findAllUsers()
            .then(_users => {
                users = _users
                renderUsers(users)
            })
    }
    $(init)


})()
