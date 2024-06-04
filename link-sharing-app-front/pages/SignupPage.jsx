import PrimaryButton from "../src/components/PrimaryButton";
import "../src/styles/pages/SignupPage.css";
import { Link } from 'react-router-dom'; 


function loginPage() {
  return (
    <div className="container">
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.7735 34.2252C8.21683 36.6668 12.1435 36.6668 20.0002 36.6668C27.8568 36.6668 31.7852 36.6668 34.2252 34.2252C36.6668 31.7868 36.6668 27.8568 36.6668 20.0002C36.6668 12.1435 36.6668 8.21516 34.2252 5.7735C31.7868 3.3335 27.8568 3.3335 20.0002 3.3335C12.1435 3.3335 8.21516 3.3335 5.7735 5.7735C3.3335 8.21683 3.3335 12.1435 3.3335 20.0002C3.3335 27.8568 3.3335 31.7852 5.7735 34.2252ZM15.8335 14.5835C14.7622 14.5835 13.7149 14.9012 12.8242 15.4964C11.9334 16.0916 11.2391 16.9375 10.8291 17.9273C10.4192 18.9171 10.3119 20.0062 10.5209 21.0569C10.7299 22.1076 11.2458 23.0728 12.0033 23.8303C12.7609 24.5879 13.726 25.1037 14.7768 25.3127C15.8275 25.5218 16.9166 25.4145 17.9064 25.0045C18.8961 24.5945 19.7421 23.9003 20.3373 23.0095C20.9325 22.1187 21.2502 21.0715 21.2502 20.0002C21.2502 19.6686 21.3819 19.3507 21.6163 19.1163C21.8507 18.8819 22.1686 18.7502 22.5002 18.7502C22.8317 18.7502 23.1496 18.8819 23.384 19.1163C23.6185 19.3507 23.7502 19.6686 23.7502 20.0002C23.7502 21.5659 23.2859 23.0965 22.416 24.3984C21.5461 25.7003 20.3097 26.715 18.8631 27.3142C17.4165 27.9134 15.8247 28.0702 14.289 27.7647C12.7533 27.4592 11.3427 26.7053 10.2356 25.5981C9.1284 24.4909 8.37441 23.0803 8.06895 21.5446C7.76348 20.0089 7.92026 18.4172 8.51945 16.9706C9.11864 15.524 10.1333 14.2876 11.4352 13.4177C12.7371 12.5478 14.2677 12.0835 15.8335 12.0835C16.165 12.0835 16.483 12.2152 16.7174 12.4496C16.9518 12.684 17.0835 13.002 17.0835 13.3335C17.0835 13.665 16.9518 13.983 16.7174 14.2174C16.483 14.4518 16.165 14.5835 15.8335 14.5835ZM29.5835 20.0002C29.5835 21.4368 29.0128 22.8145 27.997 23.8303C26.9812 24.8461 25.6034 25.4168 24.1668 25.4168C23.8353 25.4168 23.5174 25.5485 23.2829 25.7829C23.0485 26.0174 22.9168 26.3353 22.9168 26.6668C22.9168 26.9984 23.0485 27.3163 23.2829 27.5507C23.5174 27.7851 23.8353 27.9168 24.1668 27.9168C25.7326 27.9168 27.2632 27.4525 28.5651 26.5826C29.867 25.7127 30.8817 24.4763 31.4809 23.0297C32.0801 21.5832 32.2368 19.9914 31.9314 18.4557C31.6259 16.92 30.8719 15.5094 29.7648 14.4022C28.6576 13.2951 27.247 12.5411 25.7113 12.2356C24.1756 11.9301 22.5838 12.0869 21.1373 12.6861C19.6907 13.2853 18.4543 14.3 17.5844 15.6019C16.7145 16.9038 16.2502 18.4344 16.2502 20.0002C16.2502 20.3317 16.3819 20.6496 16.6163 20.884C16.8507 21.1185 17.1686 21.2502 17.5002 21.2502C17.8317 21.2502 18.1496 21.1185 18.384 20.884C18.6185 20.6496 18.7502 20.3317 18.7502 20.0002C18.7502 18.5636 19.3208 17.1858 20.3367 16.17C21.3525 15.1542 22.7302 14.5835 24.1668 14.5835C25.6034 14.5835 26.9812 15.1542 27.997 16.17C29.0128 17.1858 29.5835 18.5636 29.5835 20.0002Z"
            fill="#633CFF"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="136"
          height="27"
          viewBox="0 0 136 27"
          fill="none"
        >
          <path
            d="M14.2472 26.15V22.195L14.5935 22.265C14.3626 23.5483 13.6701 24.575 12.5158 25.345C11.3846 26.115 10.0226 26.5 8.42974 26.5C6.81378 26.5 5.40559 26.1267 4.20516 25.38C3.02782 24.61 2.11596 23.5367 1.46957 22.16C0.823191 20.7833 0.5 19.1617 0.5 17.295C0.5 15.405 0.834734 13.76 1.5042 12.36C2.17367 10.96 3.10862 9.875 4.30904 9.105C5.53255 8.335 6.95229 7.95 8.56824 7.95C10.2535 7.95 11.6155 8.34666 12.6543 9.14C13.7162 9.93333 14.3395 11.0183 14.5242 12.395L14.1433 12.43V0.949999H19.3375V26.15H14.2472ZM10.0919 22.3C11.3154 22.3 12.308 21.8683 13.0698 21.005C13.8317 20.1183 14.2126 18.8583 14.2126 17.225C14.2126 15.5917 13.8201 14.3433 13.0352 13.48C12.2734 12.5933 11.2692 12.15 10.0226 12.15C8.82218 12.15 7.82952 12.5933 7.04463 13.48C6.28282 14.3667 5.90192 15.6267 5.90192 17.26C5.90192 18.8933 6.28282 20.1417 7.04463 21.005C7.82952 21.8683 8.84527 22.3 10.0919 22.3Z"
            fill="#333333"
          />
          <path
            d="M31.801 26.5C29.8387 26.5 28.1304 26.115 26.6761 25.345C25.2217 24.5517 24.0905 23.455 23.2826 22.055C22.4977 20.655 22.1052 19.045 22.1052 17.225C22.1052 15.3817 22.4977 13.7717 23.2826 12.395C24.0905 10.995 25.2102 9.91 26.6415 9.14C28.0727 8.34666 29.7349 7.95 31.6278 7.95C33.4516 7.95 35.0329 8.32333 36.3718 9.07C37.7108 9.81667 38.7496 10.855 39.4883 12.185C40.227 13.515 40.5964 15.0783 40.5964 16.875C40.5964 17.2483 40.5849 17.5983 40.5618 17.925C40.5387 18.2283 40.5041 18.52 40.4579 18.8H25.1525V15.335H36.2679L35.3676 15.965C35.3676 14.5183 35.0213 13.4567 34.3288 12.78C33.6593 12.08 32.7359 11.73 31.5586 11.73C30.1966 11.73 29.1346 12.1967 28.3728 13.13C27.6341 14.0633 27.2647 15.4633 27.2647 17.33C27.2647 19.15 27.6341 20.5033 28.3728 21.39C29.1346 22.2767 30.2658 22.72 31.7663 22.72C32.5974 22.72 33.313 22.58 33.9133 22.3C34.5135 22.02 34.9636 21.565 35.2637 20.935H40.1462C39.5691 22.6617 38.5765 24.0267 37.1683 25.03C35.7832 26.01 33.9941 26.5 31.801 26.5Z"
            fill="#333333"
          />
          <path
            d="M47.6802 26.15L40.72 8.3H46.2951L51.7316 24.96H48.8229L54.2248 8.3H59.6614L52.7012 26.15H47.6802Z"
            fill="#333333"
          />
          <path
            d="M61.6687 26.15V0.949999H66.8628V26.15H61.6687Z"
            fill="#333333"
          />
          <path
            d="M71.0019 26.15V8.3H76.1961V26.15H71.0019ZM70.8288 5.92V0.25H76.3692V5.92H70.8288Z"
            fill="#333333"
          />
          <path
            d="M80.3352 26.15V8.3H85.4254V12.5H85.5293V26.15H80.3352ZM92.628 26.15V15.09C92.628 14.11 92.374 13.375 91.8662 12.885C91.3814 12.395 90.6657 12.15 89.7193 12.15C88.9113 12.15 88.1841 12.3367 87.5377 12.71C86.9144 13.0833 86.4181 13.5967 86.0487 14.25C85.7024 14.9033 85.5293 15.6733 85.5293 16.56L85.0792 12.255C85.6563 10.9483 86.4989 9.91 87.607 9.14C88.7381 8.34666 90.1233 7.95 91.7623 7.95C93.7245 7.95 95.2251 8.51 96.2639 9.63C97.3027 10.7267 97.8221 12.2083 97.8221 14.075V26.15H92.628Z"
            fill="#333333"
          />
          <path
            d="M101.775 26.15V0.949999H106.969V26.15H101.775ZM113.098 26.15L105.757 16.875L112.925 8.3H118.915L110.501 17.68L110.743 16.035L119.262 26.15H113.098Z"
            fill="#333333"
          />
          <path
            d="M127.743 26.5C125.158 26.5 123.103 25.975 121.58 24.925C120.056 23.875 119.225 22.4283 119.086 20.585H123.727C123.842 21.3783 124.234 21.985 124.904 22.405C125.596 22.8017 126.543 23 127.743 23C128.828 23 129.613 22.8483 130.098 22.545C130.606 22.2183 130.86 21.7633 130.86 21.18C130.86 20.7367 130.71 20.3983 130.41 20.165C130.133 19.9083 129.613 19.6983 128.852 19.535L126.012 18.94C123.911 18.4967 122.365 17.8317 121.372 16.945C120.379 16.035 119.883 14.8683 119.883 13.445C119.883 11.7183 120.541 10.3767 121.857 9.42C123.173 8.44 125.008 7.95 127.363 7.95C129.694 7.95 131.552 8.42833 132.938 9.385C134.323 10.3183 135.084 11.625 135.223 13.305H130.583C130.491 12.6983 130.167 12.2433 129.613 11.94C129.059 11.6133 128.274 11.45 127.259 11.45C126.335 11.45 125.643 11.59 125.181 11.87C124.742 12.1267 124.523 12.5 124.523 12.99C124.523 13.41 124.708 13.7483 125.077 14.005C125.446 14.2383 126.058 14.4483 126.912 14.635L130.098 15.3C131.876 15.6733 133.215 16.3733 134.115 17.4C135.038 18.4033 135.5 19.5933 135.5 20.97C135.5 22.72 134.819 24.085 133.457 25.065C132.118 26.0217 130.214 26.5 127.743 26.5Z"
            fill="#333333"
          />
        </svg>
      </div>
      <div className="card-container">
        <h2>Create account</h2>
        <p className="description">
          Let’s get you started sharing your links!{" "}
        </p>
        <form action="/submit-email" method="POST">
          <label for="email">Email address</label>
          <div className="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z"
                fill="#737373"
              />
            </svg>
            <input
              type="email"
              id="email"
              placeholder="e.g. alex@email.com"
              name="email"
              required
            />
          </div>{" "}
          <label for="email">Create password</label>
          <div className="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM8.5 9.91438V11.5C8.5 11.6326 8.44732 11.7598 8.35355 11.8536C8.25979 11.9473 8.13261 12 8 12C7.86739 12 7.74021 11.9473 7.64645 11.8536C7.55268 11.7598 7.5 11.6326 7.5 11.5V9.91438C7.16639 9.79643 6.88522 9.56434 6.70618 9.25914C6.52715 8.95393 6.46177 8.59526 6.5216 8.24651C6.58144 7.89776 6.76264 7.58139 7.03317 7.35332C7.3037 7.12525 7.64616 7.00016 8 7.00016C8.35384 7.00016 8.6963 7.12525 8.96683 7.35332C9.23736 7.58139 9.41856 7.89776 9.4784 8.24651C9.53823 8.59526 9.47285 8.95393 9.29382 9.25914C9.11478 9.56434 8.83361 9.79643 8.5 9.91438ZM10 5H6V3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5Z"
                fill="#737373"
              />
            </svg>
            <input
              type="password"
              placeholder="At least .8 characters"
              name="password"
              required
            />
          </div>
          <label for="email">Confirm password</label>
          <div className="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM8.5 9.91438V11.5C8.5 11.6326 8.44732 11.7598 8.35355 11.8536C8.25979 11.9473 8.13261 12 8 12C7.86739 12 7.74021 11.9473 7.64645 11.8536C7.55268 11.7598 7.5 11.6326 7.5 11.5V9.91438C7.16639 9.79643 6.88522 9.56434 6.70618 9.25914C6.52715 8.95393 6.46177 8.59526 6.5216 8.24651C6.58144 7.89776 6.76264 7.58139 7.03317 7.35332C7.3037 7.12525 7.64616 7.00016 8 7.00016C8.35384 7.00016 8.6963 7.12525 8.96683 7.35332C9.23736 7.58139 9.41856 7.89776 9.4784 8.24651C9.53823 8.59526 9.47285 8.95393 9.29382 9.25914C9.11478 9.56434 8.83361 9.79643 8.5 9.91438ZM10 5H6V3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5Z"
                fill="#737373"
              />
            </svg>
            <input
              type="password"
              placeholder="At least .8 characters"
              name="password-repeat"
              required
            />
          </div>{" "}
          <p className="password-notice">Password must contain at least 8 characters</p>
          <PrimaryButton type={"submit"} text={"Create new account"} />
        </form>
        <div className="already-account-container">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
