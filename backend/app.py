from flask import Flask, render_template,request,session,redirect
from dashboard import calculate_risk_probability

app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static"
)

app.secret_key = "alpha_copilot"

USERNAME = "engineer"
PASSWORD = "alpha123"

@app.route("/")
def login():
    return render_template("login.html")


@app.route("/authenticate", methods=["POST"])
def authenticate():

    username = request.form["username"]
    password = request.form["password"]

    if username == USERNAME and password == PASSWORD:

        session["user"] = username

        return redirect("/upload")

    return render_template(
        "login.html",
        error="Invalid Username or Password"
    )


@app.route("/upload")
def upload_log():
    return render_template("upload.html")


@app.route("/dashboard",methods=["post"])
def dashboard():

    data = calculate_risk_probability()

    return render_template(
        "dashboard.html",
        cpu=data["cpu"],
        latency=data["latency"],
        loss=data["loss"],
        risk=data["risk"],
        probability=data["probability"]
    )


@app.route("/reasons",methods=["post"])
def reasons():

    data = calculate_risk_probability()

    return render_template(
        "reasons.html",
        reasons=data["reasons"]
    )

@app.route("/copilot")
def copilot():
    return render_template("copilot.html")


if __name__ == "__main__":
    print(app.url_map)  # Debug ke liye
    app.run(debug=True)