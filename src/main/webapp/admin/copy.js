// // (function () {
// //
// //     var UserService = new AdminUserServiceClient();
// //
// //
// //     let users = [
// //
// //     ]
// //
// //
// //     const rowTemplate = jQuery('.wbdv-template');
// //     const tbody =jQuery('.wbdv-tbody');
// //
// //
// //     function renderUsers(users) {
// //         tbody.empty()
// //         for (var u in users) {
// //             const user = users[u];
// //             const rowClone = rowTemplate.clone();
// //             rowClone.removeClass('wbdv-hidden');
// //             rowClone.find('.wbdv-username').html(user.username);
// //             rowClone.find('.wbdv-first-name').html(user.firstName);
// //             rowClone.find('.wbdv-last-name').html(user.lastName);
// //             rowClone.find('.wbdv-role').html(user.role);
// //             rowClone.find('.huixian-delete-btn').attr("id",user._id)
// //             tbody.append(rowClone);
// //
// //
// //         }
// //
// //         $(".huixian-delete-btn").click(function (event){
// //             var button = $(event.target)
// //             var index = button.attr("id")
// //
// //             users.splice(index,1)
// //             renderUsers(users)
// //         })
// //     }
// //     renderUsers(users);
// //
// //     var createBtn = $(".huixian-create-btn");
// //     createBtn.click(function() {
// //
// //         var newUser = {
// //             id: "NEW USER",
// //             username: "new",
// //             firstName: "BBBBB",
// //             lastName:"zzzzz"
// //         }
// //         users.push(newUser);
// //         renderUsers(users);
// //     })
// //
// //
// //
// //
// //     function createUser(user) {
// //         users.push(user)
// //         renderUsers(users)
// //     }
// //
// //     var $usernamefl = $(".username-fl");
// //     var $firstnamefl = $(".fisrtname-fl");
// //     var $lastnamefl = $(".lastname-fl");
// //     var $rolefl = $(".role-fl");
// //
// //     var updateBtn =$(".huixian-update-btn")
// //
// //
// //
// //     updateBtn.click(function(){
// //         var newUser = {
// //             username: $usernamefl.val(),
// //             firstName: $firstnamefl.val(),
// //             lastName: $lastnamefl.val(),
// //             role: $rolefl.val()
// //
// //         }
// //         createUser(newUser);
// //     })
// //
// //     function init() {
// //         UserService.findAllUsers()
// //             .then(_users => {
// //                 users = _users
// //                 renderUsers(users)
// //             })
// //     }
// //     $(init)
// //
// //
// // })()
//
// var $usernamefl
// var $firstnamefl
// var $lastnamefl
// var $rolefl
// var $tbody
// var $createBtn
// var $updateBtn
// var $rowTemplate
// var UserService = new AdminUserServiceClient();
//
// let users = [
//
//     ]
//
// function deleteUser(event) {
//     var button = $(event.target)
//     var index = button.attr("id")
//     var id = users[index]._id
//     UserService.deleteUser(id)
//         .then(function (status) {
//             users.splice(index, 1)
//             renderUsers(users)
//         })
// }
//
// function createUser() {
//     var newUser = {
//         username: $usernamefl.val(),
//         firstName: $firstnamefl.val(),
//         lastName: $lastnamefl.val(),
//         role: $rolefl.val()
//     }
//
//     UserService.createUser(newUser)
//         .then(function (actualUser) {
//             users.push(actualUser)
//             renderUsers(users)
//         })
// }
//
// var selectedUser = null
// function selectUser(event) {
//     var id = $(event.target).attr("id")
//     console.log(id)
//     selectedUser = users.find(user => user._id === id)
//     $usernamefl.val(selectedUser.username)
//     $firstnamefl.val(selectedUser.firstName)
//     $lastnamefl.val(selectedUser.lastName)
//     $rolefl.val(selectedUser.role)
// }
//
// function updateUser() {
//     selectedUser.username = $usernamefl.val()
//     selectedUser.firstName = $firstnamefl.val()
//     selectedUser.lastName = $lastnamefl.val()
//     selectedUser.role = $rolefl.val()
//     UserService.updateUser(selectedUser._id, selectedUser)
//         .then(status => {
//             var index = users.findIndex(user => user._id === selectedUser._id)
//             users[index] = selectedUser
//             renderUsers(users)
//         })
// }
//
// // function renderUsers(users) {
// //     $tbody.empty()
// //     for(var i=0; i< users.length; i++) {
// //         var user = users[i]
// //         $tbody
// //             .prepend(`
// //       <tr>
// //           <td>${user.title}</td>
// //           <td>${course.section}</td>
// //           <td>${course.seats}</td>
// //           <td>${course.semester}</td>
// //           <td>
// //               <button id="${i}" class="neu-delete-btn">Delete</button>
// //               <button id="${course._id}" class="wbdv-select-btn">Select</button>
// //           </td>
// //       </tr>
// //       `)
// //     }
// //     $(".neu-delete-btn").click(deleteCourse)
// //     $(".wbdv-select-btn").click(selectCourse)
// // }
//
// function renderUsers(users) {
//     tbody.empty()
//     for (var u in users) {
//         const user = users[u];
//         const rowClone = rowTemplate.clone();
//         rowClone.removeClass('wbdv-hidden');
//         rowClone.find('.wbdv-username').html(user.username);
//         rowClone.find('.wbdv-first-name').html(user.firstName);
//         rowClone.find('.wbdv-last-name').html(user.lastName);
//         rowClone.find('.wbdv-role').html(user.role);
//         rowClone.find('.huixian-delete-btn').attr("id", user._id)
//         tbody.append(rowClone);
//
//     }
//     $(".huixian-delete-btn").click(deleteUser)
//     $(".huixian-select-btn").click(selectUser)
// }
//
// function main() {
//     // $tbody = jQuery("#table-rows")
//     $rowTemplate = jQuery('.wbdv-template');
//     $tbody =jQuery('.wbdv-tbody');
//     $createBtn = $(".huixian-create-btn")
//     $updateBtn = $(".huixian-update-btn")
//
//     $usernamefl = $(".username-fl");
//     $firstnamefl = $(".fisrtname-fl");
//     $lastnamefl = $(".lastname-fl");
//     $rolefl = $(".role-fl");
//
//     $updateBtn.click(updateUser)
//     $createBtn.click(createUser)
//     UserService.findAllUsers().then(function (actualUsers) {
//         users = actualUsers
//         renderUsers(users)
//     })
// }
// $(main)
(function () {
    var UserService = new AdminUserServiceClient();


    let users = [

    ]


    const rowTemplate = jQuery('.wbdv-template');
    const tbody =jQuery('.wbdv-tbody');

    var selectedUser = null

    function renderUsers(users) {
        tbody.empty()
        for (var u in users) {
            const user = users[u];
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden');
            rowClone.find('.wbdv-username').html(user.username).attr("id", user._id);
            rowClone.find('.wbdv-password').html(user.password).attr("id", user._id);
            rowClone.find('.wbdv-first-name').html(user.firstName).attr("id", user._id);
            rowClone.find('.wbdv-last-name').html(user.lastName).attr("id", user._id);
            rowClone.find('.wbdv-role').html(user.role).attr("id", user._id);
            rowClone.find('.huixian-delete-btn').attr("id", user._id);
            rowClone.find('.huixian-select-btn').attr("id", user._id);

            tbody.append(rowClone);


        }


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

        // var selectedUser = null
        $(".huixian-select-btn").click(function (event) {
            var id = $(event.target).attr("id")
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

    var updateBtn =$(".huixian-update-btn")


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





