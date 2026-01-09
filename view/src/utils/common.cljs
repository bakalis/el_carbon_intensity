(ns utils.common)

(defn intensity->color [ci]
  (cond
    (nil? ci)  "#cccccc"

    (< ci 30)  "#1e8449"
    (< ci 60)  "#27ae60"
    (< ci 90)  "#58d68d"
    (< ci 120) "#a9dfbf"

    (< ci 160) "#f9e79f"
    (< ci 200) "#f4d03f"

    (< ci 240) "#f5b041"
    (< ci 300) "#eb984e"

    (< ci 360) "#e74c3c"
    (< ci 420) "#cb4335"
    :else      "#7b241c"))

