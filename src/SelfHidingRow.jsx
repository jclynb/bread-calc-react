export const SelfHidingRow = ({ dataTuple, title, unit }) => dataTuple[0] > 0 || dataTuple[0] == undefined  && (
    <tbody>
    <tr>
      <td>{title}</td>
      <td>{Math.round(dataTuple[0])}{unit}</td>
      <td>{Math.round(dataTuple[1])}%</td>
    </tr>
    </tbody>
  );