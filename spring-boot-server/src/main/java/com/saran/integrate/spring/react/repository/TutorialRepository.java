package com.saran.integrate.spring.react.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saran.integrate.spring.react.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
	//custom methods
	List<Tutorial> findByPublished(boolean published);
	List<Tutorial> findByTitleContaining(String title);
}
