import React from "react";

function Recipe({recipe, index, onDelete}) {
    return (
       <tr>
           <td>
               <p>
               {recipe.name}
               </p>
           </td>
           <td>
               <p>
               {recipe.cuisine}
               </p>
           </td>
           <td>
               <p>
               <img src={recipe.photo} />
               </p>
           </td>
           <td className="content_td">
               <p>
               {recipe.ingredients}
               </p>
           </td>
           <td className="content_td">
               <p>
               {recipe.preparation}
               </p>
           </td>
           <td>
                <button onClick={() => onDelete(index)} name="delete">Delete</button>
           </td>
       </tr>
    );
}

export default Recipe;