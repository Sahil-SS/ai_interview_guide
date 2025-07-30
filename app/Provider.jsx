"use client";
import { supabase } from "@/services/superbaseClient";
import React, { Children, useEffect, useState } from "react";

function Provider() {
  useEffect(() => {
    createNewUser;
  }, []);

  const createNewUser = async (userData) => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      //checking if user already exists
      let { data: Users, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email);

      console.log(Users);

        //if user does not exist, create a new user
        if (Users.length === 0) {
        const { data, error } = await supabase
          .from("Users")
          .insert([
            {
              email: user.email,
              name: userData.name,
              image: userData.image,
            },
          ]);
        }
    });
  };

  return <div>{Children}</div>;
}

export default Provider;
