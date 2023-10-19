package com.example.Relax.Repository;

import com.example.Relax.Models.AddressLibrary;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<AddressLibrary, Long> {


}
