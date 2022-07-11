<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div class="icon-wrapper d-flex">
                    <b-avatar src="https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" size="6rem"></b-avatar>
                    <div class="avatar-text">
                        <label class="h">Profile</label><br>
                        <span>Update your profile and personal details</span>
                    </div>
                </div>
                <div class="button-group">
                    <button class="btn btn-outline-succes border-mx-green text-mx-green m-2" type="button">
                        Cancel
                    </button>
                    <button class="btn btn-sucess bg-mx-green border-mx-green text-white m-2">
                        Save
                    </button>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="form-group my-3">
                            <h5 for="firstName" class="font-weight-normal">First Name</h5>
                            <div class="input-group mb-2">
                            <input type="text" class="form-control rounded-2" id="firstName" placeholder="Type your first name" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="form-group my-3">
                            <h5 for="lastName" class="font-weight-normal">Last Name</h5>
                            <div class="input-group mb-2">
                            <input type="text" class="form-control rounded-2" id="lastName" placeholder="Type your last name" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="form-group my-3">
                            <h5 for="emailInput" class="font-weight-normal">Email Address</h5>
                            <div class="input-group mb-2">
                            <input type="email" class="form-control" id="emailInput" placeholder="Type your email" required height="250px">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="form-group my-3">
                            <h5 for="password" class="font-weight-normal">Password</h5>
                            <div class="input-group mb-2">
                            <input type="password" class="form-control rounded-2" id="password" placeholder="Type your passowrd" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="form-group my-3">
                            <h5 for="confirmPassword" class="font-weight-normal">Confirm Password</h5>
                            <div class="input-group mb-2">
                            <input type="password" class="form-control rounded-2" id="confirmPassword" placeholder="Type your confirm passowrd" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="form-group my-3">
                            <h5 for="avatar" class="font-weight-normal">avatar</h5>
                            <div class="input-group mb-2">
                            <input type="file" class="form-control rounded-2" id="avatar" required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileFormAdmin',
}
</script>

<style scoped>
.card {
    border-color: #D1D5DB;
    border-radius: 15px;
}
.icon-wrapper {
    width: 500px;
}
.avatar-text {
    margin: auto 0;
    margin-left: 10%;
    font-size: .8em;
    line-height: 12px;
}
.avatar-text .h {
    font-size: 1.2em;
    font-weight: bold;
}
.avatar-text span {
    font-size: .6em;
    color: #6B7280;
}
.button-group {
    margin: auto 0;
}
</style>