import * as React from "react";
import "./profile.css";

function Profile() {
  return (
    <section class="vh-100" style="background-color: #f4f5f7;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-6 mb-4 mb-lg-0">
            <div class="card mb-3" style="border-radius: .5rem;">
              <div class="row g-0">
                <div
                  class="col-md-4 gradient-custom text-center text-white"
                  style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;"
                >
                  <img
                    src=""
                    alt="ProfilePicture"
                    class="img-fluid my-5"
                    style="width: 80px;"
                  />
                  <input
                    type="file"
                    id="profile-pic-upload"
                    accept="image/*"
                    style="display: none;"
                  ></input>
                  <h5>Ali Hamade</h5>
                  <i class="far fa-edit mb-5"></i>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <h6>Information</h6>
                    <hr class="mt-0 mb-4"></hr>
                    <div class="row pt-1">
                      <div class="col-6 mb-2">
                        <h6>Email</h6>
                        <p class="text-muted">info@example.com</p>
                      </div>

                      <div class="col-6 mb-2">
                        <h6>Phone</h6>
                        <p class="text-muted">123 456 789</p>
                      </div>
                    </div>

                    <div class="col-6 mb-2">
                      <h6>Building Block</h6>
                      <p class="text-muted">A</p>
                    </div>
                  </div>

                  <div class="col-6 mb-2">
                    <h6>Room Nb</h6>
                    <p class="text-muted">402</p>
                  </div>
                </div>

                <hr class="mt-0 mb-4"></hr>
                <div class="row pt-1">
                  <div class="col-6 mb-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
