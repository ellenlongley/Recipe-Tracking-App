import React, { useState } from "react";

function RecipeCreate({onCreate}) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {name, cuisine, photo, ingredients, preparation}
    onCreate(recipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input placeholder="Name" name="name" value={name} onChange={({ target }) => setName(target.value)} />
            </td>
            <td>
              <input placeholder="Cuisine" name="cuisine" value={cuisine} onChange={({ target }) => setCuisine(target.value)} />
            </td>
            <td>
              <input placeholder="URL" name="photo" type="url" value={photo} onChange={({ target }) => setPhoto(target.value)} />
            </td>
            <td>
              <textarea placeholder="Ingredients" name="ingredients" value={ingredients} onChange={({ target }) => setIngredients(target.value)} />
            </td>
            <td>
              <textarea placeholder="Preparation" name="preparation" value={preparation} onChange={({ target }) => setPreparation(target.value)} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
