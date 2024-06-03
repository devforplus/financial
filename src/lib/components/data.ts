export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      tension: 0.3, // lineTension 대신 tension 사용
      backgroundColor: 'rgba(225, 204,230, .3)',
      borderColor: 'rgb(205, 130, 158)',
      borderCapStyle: 'butt' as CanvasLineCap, // 타입을 명시적으로 지정
      borderDash: [] as number[],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter' as CanvasLineJoin, // 타입을 명시적으로 지정
      pointBorderColor: 'rgb(205, 130, 158)',
      pointBackgroundColor: 'rgb(255, 255, 255)',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(0, 0, 0)',
      pointHoverBorderColor: 'rgba(220, 220, 220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      fill: true,
      tension: 0.3, // lineTension 대신 tension 사용
      backgroundColor: 'rgba(184, 185, 210, .3)',
      borderColor: 'rgb(35, 26, 136)',
      borderCapStyle: 'butt' as CanvasLineCap, // 타입을 명시적으로 지정
      borderDash: [] as number[],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter' as CanvasLineJoin, // 타입을 명시적으로 지정
      pointBorderColor: 'rgb(35, 26, 136)',
      pointBackgroundColor: 'rgb(255, 255, 255)',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(0, 0, 0)',
      pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ],
};
