export default function About() {
  return (
    <section className="prose mx-auto">
    <header className="w-full flex justify-center mb-6">
      <img
        src={`${import.meta.env.BASE_URL}banner.png`}
        alt="Banner"
        className="h-auto rounded-lg"
      />
    </header>
      <h1>Was ich mache</h1>
      <p>
  Mit besonderer Vorliebe beschäftige ich mich mit dem Motiv "Mensch" und "Menschliches",
  zumeist gegenständlich dargestellt.
  Natürlich behandle ich auch andere Themen (Landschaft, Stilleben, florale Motive)
  und gelegentlich entstehen auch nichtgegenständliche Arbeiten.
  Sehr gerne gestalte ich dreidimensionale Dinge, aber wie Sie der Galerie entnehmen können, zeichne und male ich auch. 
      </p>

<h1>Vita</h1>
<table id="vita">
	<tbody><tr>
		<th>Jahr</th>
		<th>Tätigkeit</th>			
	</tr>
	<tr>
		<td className="year">seit 1997:</td>
		<td className="task">Kunsterzieherin (Edith-Stein-Institut für Soziale Berufe, Rottweil)</td>
	</tr>
	<tr>
		<td className="year">1991:</td>
		<td className="task">Beschäftigungstherapie (Dechow Stiftung, Mosbach)</td>
	</tr>
	<tr>
		<td className="year">1988:</td>
		<td className="task">Schulbuchillustration (Calwer Verlag, Stuttgart)</td>
	</tr>
	<tr>
		<td className="year">1987:</td>
		<td className="task">Kachelmalerei (Firma "Mosbach Keramik")</td>
	</tr>
	<tr>
		<td className="year">1986:</td>
		<td className="task">Kunstkurse in der Erwachsenenbildung (Mosbach, dann beim Bildungswerk, Rottweil)</td>
	</tr>
	<tr>
		<td className="year">1984 - 85:</td>
		<td className="task">College of Art and Design, Limerick (Pädagogisches Aufbaustudium, Diploma in Principles of Teaching Art)</td>
	</tr>
	<tr>
		<td className="year">1981 - 84:</td>
		<td className="task">College of Art and Design, Limerick (Studium der Bildenden Kunst / Skulptur. Diploma in Fine Art, Sculpture)</td>
	</tr>
	<tr>
		<td className="year">1980 - 81:</td>
		<td className="task">College of Art and Design, Cork (Grundstudium der Bildenden Kunst, Certificate)</td>
	</tr>
</tbody>
</table>
    </section>
  )
}
