import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { t } from "i18next";
import PopUp from "../../common/PopUp";
import passIcon from "../../../assets/images/eye.svg";
import hideneye from "../../../assets/images/hideneye.svg";
import { NavLink } from "react-router-dom";
import { AuthFun } from "../../../store/actions/auth-action";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required(t("RequiredMessage")),
  email: Yup.string().email(t("thisEmail")).required(t("RequiredMessage")),
  phone: Yup.string()
    .min(9, "يجب أن يكون 9 أرقام")
    .matches(/^[0-9]+$/, "يجب ان تقوم بإدخال رقم جوال ")
    .required(t("RequiredMessage")),
  password: Yup.string()
    .min(8, "يجب إدخال بحد أدنى 8")
    .required(t("RequiredMessage")),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "يجب أن تكون مطابقه لكلمه السر")
    .required(t("RequiredMessage")),
  gender: Yup.string().required(t("RequiredMessage")),
  // country_code: Yup.string().required(t("RequiredMessage")),
});

export default function RegisterCon() {
  //checkboxRef
  const checkboxRef = useRef(null);

  let dispatch = useDispatch();

  const navigator = useNavigate();

  const [Loading, setLoading] = useState(false);

  //typepassword
  const [typepassword, setTypepassword] = useState("password");

  //typepasswordcon
  const [typepasswordcon, settypepasswordcon] = useState("password");

  //showPass
  const [showPass, setshowPass] = useState(false);
  
  const { t } = useTranslation();

  //showPassCon
  const [showPassCon, setshowPassCon] = useState(false);

  //handleCheckboxClick
  const handleCheckboxClick = () => {
    const isChecked = checkboxRef.current.checked;
    console.log("Checkbox value:", isChecked);
  };

  const handelPass = () => {
    typepassword == "password"
      ? setTypepassword("text")
      : setTypepassword("password");
    setshowPass(!showPass);
  };

  const handelPassCon = () => {
    typepasswordcon == "password"
      ? settypepasswordcon("text")
      : settypepasswordcon("password");
    setshowPassCon(!showPassCon);
  };
  return (
    <div className="register-form">
      <div className=" ">
        <h3>{t("singUp")}</h3>
        <Formik
          initialValues={{
            phone: "",
            name: "",
            email: "",
            gender: "male",
            password: "",
            password_confirmation: "",
            // country_code: 966,
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            const data = {
              name: values.name,
              email: values.email,
              phone: values.phone,
              gender: values.gender,
              password: values.password,
              password_confirmation: values.password,
              // country_code: "966",
            };

            setLoading(true);
            await dispatch(
              AuthFun(data, checkboxRef.current.checked, "sign_up")
            );
            if (
              localStorage.getItem("token") ||
              sessionStorage.getItem("token")
            ) {
              navigator("/");
            }
            setLoading(false);
            // navigate("/");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="row">
                <div className="col-md-12 mb-2">
                  <label>{t("name")}</label>
                  <Field
                    name="name"
                    type="text"
                    placeholder={t("name")}
                    className="form-control"
                  />
                  {errors.name && touched.name && (
                    <span className="errorMessage">{errors.name}</span>
                  )}
                </div>

                <div className="col-md-12 mb-2">
                  <label>{t("FooterText2")} </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="form-control"
                  />
                  {errors.email && touched.email && (
                    <span className="errorMessage">{errors.email}</span>
                  )}
                </div>

                {/* <div className="col-md-3 mb-2">
                  <Field
                    as="select"
                    name="country_code"
                    className="form-control"
                  >
                    <option value="966">+966</option>
                    <option value="971">+971</option>
                    <option value="973">+973</option>
                    <option value="965">+965</option>
                    <option value="974">+974</option>
                    <option value="968">+968</option>
                    <option value="20">+20</option>
                    <option value="213">+213</option>
                    <option value="964">+964</option>
                    <option value="961">+961</option>
                    <option value="963">+963</option>
                    <option value="962">+962</option>
                    <option value="969">+969</option>
                    <option value="46">+46</option>
                    <option value="218">+218</option>
                    <option value="216">+216</option>
                    <option value="212">+212</option>
                    <option value="222">+222</option>
                    <option value="252">+252</option>
                    <option value="60">+60</option>
                    <option value="376">+376</option>
                    <option value="244">+244</option>
                    <option value="1264">+1264</option>
                    <option value="1264">+1264</option>
                    <option value="1268">+1268</option>
                    <option value="54">+54</option>
                    <option value="374">+374</option>
                    <option value="297">+297</option>
                    <option value="61">+61</option>
                    <option value="43">+43</option>
                    <option value="994">+994</option>
                    <option value="1242">+1242</option>
                    <option value="880">+880</option>
                    <option value="1246">+1246</option>
                    <option value="375">+375</option>
                    <option value="32">+32</option>
                    <option value="501">+501</option>
                    <option value="229">+229</option>
                    <option value="1441">+1441</option>
                    <option value="975">+975</option>
                    <option value="591">+591</option>
                    <option value="387">+387</option>
                    <option value="267">+267</option>
                    <option value="55">+55</option>
                    <option value="673">+673</option>
                    <option value="359">+359</option>
                    <option value="226">+226</option>
                    <option value="257">+257</option>
                    <option value="855">+855</option>
                    <option value="237">+237</option>
                    <option value="1">+1</option>
                    <option value="238">+238</option>
                    <option value="1345">+1345</option>
                    <option value="236">+236</option>
                    <option value="56">+56</option>
                    <option value="86">+86</option>
                    <option value="57">+57</option>
                    <option value="269">+269</option>
                    <option value="242">+242</option>
                    <option value="682">+682</option>
                    <option value="506">+506</option>
                    <option value="385">+385</option>
                    <option value="53">+53</option>
                    <option value="42">+42</option>
                    <option value="45">+45</option>
                    <option value="253">+253</option>
                    <option value="1809">+1809</option>
                    <option value="1809">+1809</option>
                    <option value="593">+593</option>
                    <option value="503">+503</option>
                    <option value="240">+240</option>
                    <option value="291">+291</option>
                    <option value="372">+372</option>
                    <option value="251">+251</option>
                    <option value="500">+500</option>
                    <option value="298">+298</option>
                    <option value="679">+679</option>
                    <option value="358">+358</option>
                    <option value="33">+33</option>
                    <option value="594">+594</option>
                    <option value="689">+689</option>
                    <option value="241">+241</option>
                    <option value="220">+220</option>
                    <option value="7880">+7880</option>
                    <option value="49">+49</option>
                    <option value="233">+233</option>
                    <option value="350">+350</option>
                    <option value="30">+30</option>
                    <option value="299">+299</option>
                    <option value="1473">+1473</option>
                    <option value="590">+590</option>
                    <option value="671">+671</option>
                    <option value="502">+502</option>
                    <option value="224">+224</option>
                    <option value="245">+245</option>
                    <option value="592">+592</option>
                    <option value="509">+509</option>
                    <option value="504">+504</option>
                    <option value="852">+852</option>
                    <option value="36">+36</option>
                    <option value="354">+354</option>
                    <option value="91">+91</option>
                    <option value="62">+62</option>
                    <option value="98">+98</option>
                    <option value="353">+353</option>
                    <option value="39">+39</option>
                    <option value="1876">+1876</option>
                    <option value="81">+81</option>
                    <option value="7">+7</option>
                    <option value="254">+254</option>
                    <option value="686">+686</option>
                    <option value="850">+850</option>
                    <option value="82">+82</option>
                    <option value="996">+996</option>
                    <option value="856">+856</option>
                    <option value="371">+371</option>
                    <option value="266">+266</option>
                    <option value="231">+231</option>
                    <option value="417">+417</option>
                    <option value="370">+370</option>
                    <option value="352">+352</option>
                    <option value="853">+853</option>
                    <option value="389">+389</option>
                    <option value="261">+261</option>
                    <option value="265">+265</option>
                    <option value="960">+960</option>
                    <option value="223">+223</option>
                    <option value="356">+356</option>
                    <option value="692">+692</option>
                    <option value="596">+596</option>
                    <option value="269">+269</option>
                    <option value="52">+52</option>
                    <option value="691">+691</option>
                    <option value="373">+373</option>
                    <option value="377">+377</option>
                    <option value="976">+976</option>
                    <option value="1664">+1664</option>
                    <option value="258">+258</option>
                    <option value="95">+95</option>
                    <option value="264">+264</option>
                    <option value="674">+674</option>
                    <option value="977">+977</option>
                    <option value="31">+31</option>
                    <option value="227">+227</option>
                    <option value="7">+7</option>
                    <option value="65">+65</option>
                    <option value="27">+27</option>
                    <option value="34">+34</option>
                    <option value="94">+94</option>
                    <option value="249">+249</option>
                    <option value="268">+268</option>
                    <option value="41">+41</option>
                    <option value="886">+886</option>
                    <option value="7">+7</option>
                    <option value="90">+90</option>
                    <option value="44">+44</option>
                    <option value="1">+1</option>
                  </Field>

                  {errors.country_code && touched.country_code && (
                    <span className="errorMessage">{errors.country_code}</span>
                  )}
                </div> */}
                <div className="col-md-12 mb-2">
                  {" "}
                  <label>{t("FooterText3")}</label>
                  <Field
                    name="phone"
                    type="tel"
                    placeholder=""
                    className="form-control"
                  />
                  {errors.phone && touched.phone && (
                    <span className="errorMessage">{errors.phone}</span>
                  )}
                </div>

                <div className="col-md-12 mb-2">
                  <label>{t("gender")}</label>
                  <Field as="select" name="gender" className="form-control">
                    <option disabled> Choose</option>
                    <option value="male">
                      <label>{t("male")}</label>
                    </option>
                    <option value="female">
                      <label>{t("female")}</label>
                    </option>
                  </Field>
                  {errors.gender && touched.gender && (
                    <span className="errorMessage">{errors.gender}</span>
                  )}
                </div>
                <div className="col-md-12 mb-2">
                  <label> {t("password")}</label>
                  <Field
                    type={typepassword}
                    name="password"
                    className="form-control"
                  />
                  <img
                    src={hideneye}
                    className={`eye ${showPass ? "" : "hide"}`}
                    onClick={() => handelPass()}
                  />
                  <img
                    src={passIcon}
                    className={`eye ${showPass ? "hide" : ""}`}
                    onClick={() => handelPass()}
                  />
                  {errors.password && touched.password && (
                    <span className="errorMessage">{errors.password}</span>
                  )}
                </div>
                <div className="col-md-12 mb-2">
                  <label> {t("passwordConf")}</label>
                  <Field
                    type={typepasswordcon}
                    name="password_confirmation"
                    className="form-control"
                  />
                  {showPass}
                  <img
                    src={hideneye}
                    className={`eye ${showPassCon ? "" : "hide"}`}
                    onClick={() => handelPassCon()}
                  />
                  <img
                    src={passIcon}
                    className={`eye ${showPassCon ? "hide" : ""}`}
                    onClick={() => handelPassCon()}
                  />
                  {errors.password_confirmation &&
                    touched.password_confirmation && (
                      <span className="errorMessage">
                        {errors.password_confirmation}
                      </span>
                    )}
                </div>
                <div className="checkboxInput mt-2">
                  <input
                    name="checkbox"
                    type="checkbox"
                    ref={checkboxRef}
                    onClick={handleCheckboxClick}
                  />
                  <label>{t("rememberMe")}</label>
                </div>
                <div className="col-md-12 mb-2">
                  <button
                    className="btn login-btn"
                    disabled={Loading ? "true" : ""}
                    type="submit"
                    aria-label="Submit registration form"
                  >
                    {Loading ? (
                      <span> {t("waiting")} ....</span>
                    ) : (
                      <span> {t("singUp")} </span>
                    )}
                  </button>
                </div>
                <p className="newaccount">
                  {t("haveaccount")}
                  <NavLink to="/login"> {t("logintitle")} </NavLink>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
