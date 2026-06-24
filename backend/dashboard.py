import pandas as pd

def calculate_risk_probability():

    df = pd.read_csv(r"C:\Users\saksh\OneDrive\Documents\AlphaCopilot\datasets\network_logs.csv")

    latest = df.iloc[-1]

    cpu = latest["cpu_usage"]
    latency = latest["latency_ms"]
    loss = latest["packet_loss_percent"]

    if cpu > 90 or latency > 150 or loss > 3:
        risk = "HIGH"

    elif cpu > 60 or latency > 80:
        risk = "MODERATE"

    else:
        risk = "LOW"

    if risk == "LOW":
        probability = 20

    elif risk == "MODERATE":
        probability = 55

    else:
        probability = 90

    reasons = []

    if cpu > 90:
        reasons.append("CPU usage is above 90%")

    if latency > 150:
        reasons.append("Network latency is above 150 ms")

    if loss > 3:
        reasons.append("Packet loss is above 3%")

    return {
        "cpu": cpu,
        "latency": latency,
        "loss": loss,
        "risk": risk,
        "probability": probability,
        "reasons": reasons
    }