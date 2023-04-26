const data = [
  {
    title: "Kinerja Produksi",
    childrens: [
      {
        title: "Daily",
        size: 6,
        childrens: [
          {
            title: "Unit 1",
            value: 1200,
            unit: "MWh",
            size: 4,
          },

          {
            title: "Unit 2",
            value: 1200,
            unit: "MWh",
            size: 4,
          },
          {
            title: "Unit 3",
            value: 1200,
            unit: "MWh",
            size: 4,
          },
          {
            title: "Total",
            value: 1200,
            unit: "MWh",
          },
        ],
      },
      {
        title: "Month to Date",
        size: 3,
        childrens: [
          {
            title: "Total",
            value: 1200,
            unit: "MWh",
            size: 12,
          },
          {
            title: "Pencapaian",
            value: 1200,
            unit: "MWh",
            size: 12,
          },
        ],
      },
      {
        title: "Year to Date",
        size: 3,
        childrens: [
          {
            title: "Total",
            value: 1200,
            unit: "MWh",
            size: 12,
          },
          {
            title: "Pencapaian",
            value: 1200,
            unit: "MWh",
            size: 12,
          },
        ],
      },
    ],
  },
  {
    title: "Kinerja Operasi",
    size: 12,
    childrens: [
      {
        title: "Daily",
        size: 6,
        childrens: [
          {
            title: "Unit 1",
            value: 1,
            unit: "Percent (%)",
            size: 6,
          },

          {
            title: "Unit 2",
            value: 2,
            unit: "Percent (%)",
            size: 6,
          },
          {
            title: "Total",
            value: 3,
            unit: "Percent (%)",
          },
        ],
      },
      {
        title: "Month to Date",
        size: 3,
        childrens: [
          {
            title: "Total",
            value: 75,
            unit: "Percent (%)",
            size: 75,
          },
        ],
      },
      {
        title: "Year to Date",
        size: 3,
        childrens: [
          {
            title: "Total",
            value: 77,
            unit: "Percent (%)",
            size: 12,
          },
        ],
      },
    ],
  },
  {
    title: "Kondisi Hidrologi (Water Level)",
    size: 12,
    childrens: [
      {
        title: "Daily",
        size: 4,
        childrens: [
          {
            title: "Rata-Rata\nUnit 1",
            value: 1,
            unit: "m3/s",
            size: 6,
          },
          {
            title: "Rata-Rata\nUnit 2",
            value: 2,
            unit: "m3/s",
            size: 6,
          },
          {
            title: "Total Rata-Rata",
            value: 2,
            unit: "m3/s",
            size: 12,
          },
        ],
      },
      {
        title: "Month to Date",
        size: 4,
        childrens: [
          {
            title: "Rata-Rata\nUnit 1",
            value: 1,
            unit: "m3/s",
            size: 6,
          },
          {
            title: "Rata-Rata\nUnit 2",
            value: 2,
            unit: "m3/s",
            size: 6,
          },
          {
            title: "Total Rata-Rata",
            value: 2,
            unit: "m3/s",
            size: 12,
          },
        ],
      },
      {
        title: "Year to Date",
        size: 4,
        childrens: [
          {
            title: "Rata-Rata\nUnit 1",
            value: 1,
            unit: "m3/s",
            size: 6,
          },
          {
            title: "Rata-Rata\nUnit 2",
            value: 2,
            unit: "m3/s",
            size: 6,
          },
          {
            title: "Total Rata-Rata",
            value: 2,
            unit: "m3/s",
            size: 12,
          },
        ],
      },
    ],
  },
  {
    title: "Pemeliharaan sungai",
    childrens: [
      {
        title: "Trashboom 1",
        size: 6,
        childrens: [
          { title: "Volume", value: 2, size: 6, unit: "m3" },
          { title: "Pencapaian", value: 2, size: 6, unit: "Percent(%)" },
        ],
      },
      {
        title: "Trashboom 2",
        size: 6,
        childrens: [
          { title: "Volume", value: 2, size: 6, unit: "m3" },
          { title: "Pencapaian", value: 2, size: 6, unit: "Percent(%)" },
        ],
      },
      {
        title: "Intake Rack 1",
        size: 6,
        childrens: [
          { title: "Volume", value: 2, size: 6, unit: "m3" },
          { title: "Pencapaian", value: 2, size: 6, unit: "Percent(%)" },
        ],
      },
      {
        title: "Intake Rack 2",
        size: 6,
        childrens: [
          { title: "Volume", value: 2, size: 6, unit: "m3" },
          { title: "Pencapaian", value: 2, size: 6, unit: "Percent(%)" },
        ],
      },
    ],
  },
];

function generateCard(el, childrens) {
  const container = document.createElement("div");
  container.classList = "container-fluid px-0";
  const row = document.createElement("div");
  row.classList = "row";
  container.append(row);
  el.append(container);

  childrens.forEach((children, key) => {
    const col = document.createElement("div");
    col.classList = "col-lg-" + (children.size ?? 12);
    const card = document.createElement("div");
    card.classList = "card";
    const cardHeader = document.createElement("div");
    let color = (key + 1)

    if(children.title === "Total" || children.title === "Volume" ||children.title === "Total Rata-Rata"){
        color  = "primary"
    }
    
    if(children.title === "Pencapaian"){
        color  = "secondary"
    }

    cardHeader.classList = "card-header color-" + color;
    cardHeader.innerText = children.title;
    const cardBody = document.createElement("div");
    cardBody.classList = "card-body";

    if (children.value) {
      const value = document.createElement("p");
      value.classList = "value";
      value.innerText = children.value.toLocaleString("id");
      cardBody.append(value);
    }

    if (children.unit) {
      const unit = document.createElement("p");
      unit.classList = "unit";
      unit.innerText = children.unit;
      cardBody.append(unit);
    }

    if (children.childrens) {
      generateCard(cardBody, children.childrens);
    }

    card.append(cardHeader);
    card.append(cardBody);
    col.append(card);
    row.append(col);
  });
}

const el = document.getElementById("content");

generateCard(el, data);
